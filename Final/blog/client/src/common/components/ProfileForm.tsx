import { ChangeEvent, useState, MouseEvent, useEffect } from "react";
import { useProfile } from "../redux/Store";
import { PrimaryButton } from "./Buttons";
import { ValidationAndProgressMsg } from "./ValidationProgressMsg";
import { useUiApi } from "../context/UiApiContext";

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
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [description, setDescription] = useState("");
  const [socialPrimary, setSocialPrimary] = useState("");
  const [socialSecondary, setSocialSecondary] = useState("");
  const setProfile = useProfile((state) => state.setProfile);
  const [submitProfileBtnDisabled, setSubmitCreateProfileBtnDisabled] =
    useState(true);
  const api = useUiApi();

  useEffect(() => {
    if (profileId) {
      api
        ?.getProfile(profileId)
        .then((profile) => {
          if (!profile)
            throw new Error(`Failed to get Profile with id: ${profileId}`);

          setPageState(PageState.Edit);

          setUsername(profile.userName);
          setFullname(profile.fullName);
          setDescription(profile.description);
          setSocialPrimary(profile.socialLinkPrimary || "");
          setSocialSecondary(profile.socialLinkSecond || "");
          setValidationMsg("");
        })
        .catch((e) => console.log(e));
    }
  }, [profileId]);

  const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
    const validation = validateUsername(e.target.value);

    setSubmitCreateProfileBtnDisabled(
      validation === ValidationStates.FieldIsValid ? false : true
    );

    setUsername(e.target.value.replace("@", ""));
    setValidationMsg(validation);
  };
  const onChangeFullname = (e: ChangeEvent<HTMLInputElement>) => {
    const validation = validateFullname(e.target.value);

    setSubmitCreateProfileBtnDisabled(
      validation === ValidationStates.FieldIsValid ? false : true
    );

    setFullname(e.target.value);
    setValidationMsg(validation);
  };
  const onChangeDescription = (e: ChangeEvent<HTMLInputElement>) => {
    const validation = validateDescription(e.target.value);

    setSubmitCreateProfileBtnDisabled(
      validation === ValidationStates.FieldIsValid ? false : true
    );

    setDescription(e.target.value);
    setValidationMsg(validation);
  };
  const onChangeSocialPrimary = (e: ChangeEvent<HTMLInputElement>) => {
    setSubmitCreateProfileBtnDisabled(true);
    if (e.target.value.length > 250) {
      setValidationMsg(
        "Primary social link cannot be greater than 250 characters"
      );
    } else {
      setSocialPrimary(e.target.value.trim());
      setSubmitCreateProfileBtnDisabled(false);
    }
  };
  const onChangeSocialSecondary = (e: ChangeEvent<HTMLInputElement>) => {
    setSubmitCreateProfileBtnDisabled(true);
    if (e.target.value.length > 250) {
      setValidationMsg(
        "Secondary social link cannot be greater than 250 characters"
      );
    } else {
      setSocialSecondary(e.target.value.trim());
      setSubmitCreateProfileBtnDisabled(false);
    }
  };

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
    const usernameValidation = validateUsername(username);
    const fullnameValidation = validateFullname(fullname);
    const descValidation = validateDescription(description);
    const socialPrimaryValidation = validatePrimarySocial(socialPrimary);
    const socialSecondaryValidation = validateSecondarySocial(socialSecondary);
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

  const createProfile = async (e: MouseEvent<HTMLButtonElement>) => {
    console.log("enter createProfile");
    e.preventDefault();

    if (!validateAllFields()) return;
    setValidationMsg(START_CREATE_PROFILE_MSG);

    try {
      setSubmitCreateProfileBtnDisabled(true);

      const existingProfile = await api?.getOwnersProfile();
      if (existingProfile) {
        setValidationMsg(
          "A wallet with that address already exists. Please use a different wallet address to create a profile"
        );
        return;
      }
      await api?.addProfile(
        username,
        fullname,
        description,
        socialPrimary,
        socialSecondary
      );

      const profile = await api?.getOwnersProfile();
      if (!profile) throw new Error("Profile has not been created!");

      setProfile({
        id: profile.id,
        updatedAt: profile.updatedAt,
        username: profile.userName,
        fullname: profile.fullName,
        description: profile.description,
        ownerAddress: profile.ownerAddress,
        socialLinkPrimary: profile.socialLinkPrimary || "",
        socialLinkSecond: profile.socialLinkSecond || "",
      });
    } catch (e) {
      console.log(e);
    } finally {
      profileCreatedCallback();
      setValidationMsg("");
      setSubmitCreateProfileBtnDisabled(false);
    }
  };

  const editProfile = async (e: MouseEvent<HTMLButtonElement>) => {
    console.log("enter editProfile");
    e.preventDefault();

    if (!profileId) {
      setValidationMsg("Error profile id was not given");
      return;
    }

    if (!validateAllFields()) return;
    setValidationMsg(START_EDIT_PROFILE_MSG);

    try {
      setSubmitCreateProfileBtnDisabled(true);
      const existingProfile = await api?.getOwnersProfile();
      if (!existingProfile) {
        setValidationMsg(`No profile with the address ${api?.Address} exists`);
        return;
      }

      await api?.updateProfile(
        profileId,
        username,
        fullname,
        description,
        socialPrimary,
        socialSecondary
      );
      //await api.waitAndGetId(tx, "profiles");

      const profile = await api?.getOwnersProfile();
      if (!profile) throw new Error("Error profile has not been updated!");

      setProfile({
        id: profile.id,
        updatedAt: profile.updatedAt,
        username: profile.userName,
        fullname: profile.fullName,
        description: profile.description,
        ownerAddress: profile.ownerAddress,
        socialLinkPrimary: profile.socialLinkPrimary || "",
        socialLinkSecond: profile.socialLinkSecond || "",
      });
    } catch (e) {
      console.log(e);
    } finally {
      profileCreatedCallback();
      setValidationMsg("");
      setSubmitCreateProfileBtnDisabled(false);
    }
  };

  return (
    <form className="profile-form-container">
      <section className="profile-form-section">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          className="profile-form-item"
          value={username}
          onChange={onChangeUsername}
        ></input>
      </section>
      <section className="profile-form-section">
        <label htmlFor="fullname">Fullname</label>
        <input
          type="text"
          id="fullname"
          name="fullname"
          className="profile-form-item"
          value={fullname}
          onChange={onChangeFullname}
        ></input>
      </section>
      <section className="profile-form-section">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          className="profile-form-item"
          value={description}
          onChange={onChangeDescription}
        ></input>
      </section>
      <section className="profile-form-section">
        <label htmlFor="social-link-primary">Primary Social</label>
        <input
          type="text"
          id="social-link-primary"
          name="social-link-primary"
          className="profile-form-item"
          value={socialPrimary}
          onChange={onChangeSocialPrimary}
        ></input>
      </section>
      <section className="profile-form-section">
        <label htmlFor="social-link-secondary">Secondary Social</label>
        <input
          type="text"
          id="social-link-secondary"
          name="social-link-secondary"
          className="profile-form-item"
          value={socialSecondary}
          onChange={onChangeSocialSecondary}
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
            isDisabled={submitProfileBtnDisabled}
            style={{
              marginTop: "1em",
              color: submitProfileBtnDisabled
                ? "var(--tertiary-cl)"
                : "var(--primary-cl)",
            }}
            onClick={
              pageState === PageState.Create ? createProfile : editProfile
            }
          />
        ) : null}
      </section>
    </form>
  );
}
