import { useState, useEffect, use, useActionState } from "react";
import { PrimaryButton } from "./Buttons";
import { ValidationAndProgressMsg } from "./ValidationProgressMsg";
import { useUserProfile } from "../redux/profile/ProfileHooks";
import { UiApiContext } from "../context/ui-api/UiApiContext";
import { useFormStatus } from "react-dom";

enum ValidationStates {
  UsernameTooLong = "Username cannot be greater than 50 characters",
  UsernameHasNoValue = "Username must have a value",
  FullnameTooLong = "Fullname cannot be greater than 100 characters",
  FullnameHasNoValue = "Fullname must have a value",
  DescriptionTooLong = "Description cannot be greater than 250 characters",
  PrimarySocialTooLong = "Primary social link cannot be greater than 250 characters",
  SecondarySocialTooLong = "Primary social link cannot be greater than 250 characters",
  FieldIsValid = "",
}

const START_CREATE_PROFILE_MSG = "Please wait while your profile is created";
const START_EDIT_PROFILE_MSG = "Please wait while your profile is updated";

enum PageState {
  Create = "Create",
  Edit = "Edit",
}

export interface ProfileFormProps {
  profileCreatedCallback: () => void;
  profileId?: string;
  readOnly?: boolean;
}

export function ProfileForm({
  profileCreatedCallback,
  profileId,
  readOnly = false,
}: ProfileFormProps) {
  const [pageState, setPageState] = useState(PageState.Create);
  const [validationMsg, setValidationMsg] = useState("");
  const [_localProfile, setProfile] = useUserProfile();
  const { data: formData } = useFormStatus();
  const [_state, formAction, isPending] = useActionState(
    async (_previousState: any, formData: FormData) => {
      if (pageState === PageState.Create) {
        if (!validateAllFields()) return;
        setValidationMsg(START_CREATE_PROFILE_MSG);

        try {
          const newProfileId = await api?.uiApi.createProfile(formData);

          const profile = await api?.uiApi.getProfile(newProfileId!.toString());
          if (!profile) throw new Error("Profile has not been created!");

          setProfile({
            id: profile.id,
            updatedAt: profile.updatedAt,
            userName: profile.userName,
            fullName: profile.fullName,
            description: profile.description,
            socialLinkPrimary: profile.socialLinkPrimary || "",
            socialLinkSecond: profile.socialLinkSecond || "",
          });
        } catch (e) {
          console.log(e);
        } finally {
          profileCreatedCallback();
          setValidationMsg("");
        }
      } else {
        if (!profileId) {
          setValidationMsg("Error profile id was not given");
          return;
        }

        if (!validateAllFields()) return;
        setValidationMsg(START_EDIT_PROFILE_MSG);

        try {
          const existingProfile = await api?.uiApi.getProfile(profileId);
          if (!existingProfile) {
            setValidationMsg(`No profile with the id ${profileId} exists`);
            return;
          }

          await api?.uiApi.updateProfile(formData);

          const profile = await api?.uiApi.getProfile(profileId);
          if (!profile) throw new Error("Error profile has not been updated!");

          setProfile({
            id: profile.id,
            updatedAt: profile.updatedAt,
            userName: profile.userName,
            fullName: profile.fullName,
            description: profile.description,
            socialLinkPrimary: profile.socialLinkPrimary || "",
            socialLinkSecond: profile.socialLinkSecond || "",
          });
        } catch (e) {
          console.log(e);
        } finally {
          profileCreatedCallback();
          setValidationMsg("");
        }
      }
    },
    null
  );
  const api = use(UiApiContext);

  useEffect(() => {
    if (profileId) {
      setPageState(PageState.Edit);
      // todo: section needs rewrite
    }
  }, [profileId]);

  const validateUsername = (strInput: string): ValidationStates => {
    if (strInput.length > 50) {
      return ValidationStates.UsernameTooLong;
    } else if (!strInput) {
      return ValidationStates.UsernameHasNoValue;
    } else {
      return ValidationStates.FieldIsValid;
    }
  };
  const validateFullname = (strInput: string): ValidationStates => {
    if (strInput.length > 100) {
      return ValidationStates.FullnameTooLong;
    } else if (!strInput) {
      return ValidationStates.FullnameHasNoValue;
    } else {
      return ValidationStates.FieldIsValid;
    }
  };
  const validateDescription = (strInput: string): ValidationStates => {
    if (strInput.length > 100) {
      return ValidationStates.DescriptionTooLong;
    } else {
      return ValidationStates.FieldIsValid;
    }
  };
  const validatePrimarySocial = (strInput: string): ValidationStates => {
    if (strInput.length > 100) {
      return ValidationStates.PrimarySocialTooLong;
    } else {
      return ValidationStates.FieldIsValid;
    }
  };
  const validateSecondarySocial = (strInput: string): ValidationStates => {
    if (strInput.length > 100) {
      return ValidationStates.SecondarySocialTooLong;
    } else {
      return ValidationStates.FieldIsValid;
    }
  };

  const validateAllFields = (): boolean => {
    if (!formData) {
      setValidationMsg("Form data is not entered");
      return false;
    }
    const usernameValidation = validateUsername(
      formData.get("userName")?.toString() || ""
    );
    const fullnameValidation = validateFullname(
      formData.get("fullName")?.toString() || ""
    );
    const descValidation = validateDescription(
      formData.get("description")?.toString() || ""
    );
    const socialPrimaryValidation = validatePrimarySocial(
      formData.get("socialLinkPrimary")?.toString() || ""
    );
    const socialSecondaryValidation = validateSecondarySocial(
      formData.get("socialLinkSecondary")?.toString() || ""
    );
    console.log(
      "validations:",
      usernameValidation,
      fullnameValidation,
      descValidation,
      socialPrimaryValidation,
      socialSecondaryValidation
    );
    if (usernameValidation !== ValidationStates.FieldIsValid) {
      setValidationMsg(usernameValidation);
      return false;
    } else if (fullnameValidation !== ValidationStates.FieldIsValid) {
      setValidationMsg(fullnameValidation);
      return false;
    } else if (descValidation !== ValidationStates.FieldIsValid) {
      setValidationMsg(descValidation);
      return false;
    } else if (socialPrimaryValidation !== ValidationStates.FieldIsValid) {
      setValidationMsg(socialPrimaryValidation);
      return false;
    } else if (socialSecondaryValidation !== ValidationStates.FieldIsValid) {
      setValidationMsg(socialSecondaryValidation);
      return false;
    } else {
      setValidationMsg("");
      return true;
    }
  };

  return (
    <form className="profile-form-container" action={formAction}>
      <section className="profile-form-section">
        {pageState === PageState.Edit ? (
          <input type="hidden" name="profileId" />
        ) : null}
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="userName"
          name="userName"
          className="profile-form-item"
        ></input>
      </section>
      <section className="profile-form-section">
        <label htmlFor="fullname">Fullname</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          className="profile-form-item"
        ></input>
      </section>
      <section className="profile-form-section">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          className="profile-form-item"
        ></input>
      </section>
      <section className="profile-form-section">
        <label htmlFor="social-link-primary">Primary Social</label>
        <input
          type="text"
          id="socialLinkPrimary"
          name="socialLinkPrimary"
          className="profile-form-item"
        ></input>
      </section>
      <section className="profile-form-section">
        <label htmlFor="social-link-secondary">Secondary Social</label>
        <input
          type="text"
          id="socialLinkSecondary"
          name="socialLinkSecondary"
          className="profile-form-item"
        ></input>
      </section>
      <section className="btn-span-align" style={{ marginBottom: "0.75em" }}>
        <span
          style={{ marginTop: "0.75em", display: "flex", alignItems: "center" }}
        >
          <ValidationAndProgressMsg
            validationMsg={validationMsg}
            progressStartMsg={START_CREATE_PROFILE_MSG}
          />
        </span>

        {!readOnly ? (
          <PrimaryButton
            label={pageState === PageState.Create ? "Create" : "Edit"}
            isDisabled={isPending}
            style={{
              marginTop: "1em",
              color: isPending ? "var(--tertiary-cl)" : "var(--primary-cl)",
            }}
          />
        ) : null}
      </section>
    </form>
  );
}
