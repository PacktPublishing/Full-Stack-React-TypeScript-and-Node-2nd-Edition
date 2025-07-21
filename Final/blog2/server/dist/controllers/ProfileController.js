import { repo } from "../repository/Repository";
import { serializeBigInt } from "lib";
import { octetType } from "./lib/Constants";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./lib/AuthenticationUtils";
export const createProfileAvatar = async (req, res, next) => {
    try {
        if (!req.file) {
            res.status(400).send(Error("No file provided"));
            return;
        }
        const file = await repo.ProfileAvatar.insertProfileAvatar(req.file.buffer);
        res.status(200).json(serializeBigInt(file?.id));
    }
    catch (e) {
        next(e);
    }
};
export const getProfileAvatar = async (req, res, next) => {
    try {
        const file = await repo.ProfileAvatar.selectProfileAvatar(BigInt(req.params.avatarId));
        res.status(200).contentType(octetType).send(file?.avatar);
    }
    catch (e) {
        next(e);
    }
};
export const login = async (req, res, next) => {
    try {
        const { userName, password } = req.body;
        const result = await repo.Profile.login(userName, password);
        if (!result.status && !result.profileId) {
            res.status(401).json({ message: "Failed to authenticate" });
            return;
        }
        const userId = result.profileId.toString();
        const accessToken = jwt.sign({ userId }, JWT_SECRET, {
            subject: "authenticate",
            expiresIn: "1h",
        });
        res.status(200).json({
            userId,
            accessToken,
        });
    }
    catch (e) {
        console.log("login error:", e);
        next(e);
    }
};
export const createProfile = async (req, res, next) => {
    try {
        const { userName, password, fullName, description, socialLinkPrimary, socialLinkSecondary, } = req.body;
        const profile = await repo.Profile.insertProfile(userName, password, fullName, description, socialLinkPrimary, socialLinkSecondary, req.file?.buffer);
        res.status(200).json(serializeBigInt(profile.id));
    }
    catch (e) {
        next(e);
    }
};
export const updateProfile = async (req, res, next) => {
    try {
        const { profileId, fullName, password, description, socialLinkPrimary, socialLinkSecondary, } = req.body;
        await repo.Profile.updateProfile(profileId, fullName, password, description, socialLinkPrimary, socialLinkSecondary, req.file?.buffer);
        res.status(204).send();
    }
    catch (e) {
        next(e);
    }
};
export const getProfile = async (req, res, next) => {
    try {
        const profileId = req.params.profileId;
        res
            .status(200)
            .json(serializeBigInt(await repo.Profile.selectProfile(BigInt(profileId))));
    }
    catch (e) {
        next(e);
    }
};
export const getMostPopularAuthors = async (_req, res, next) => {
    try {
        const authors = await repo.Profile.selectMostPopularAuthors();
        res.status(200).json(serializeBigInt(authors));
    }
    catch (e) {
        next(e);
    }
};
