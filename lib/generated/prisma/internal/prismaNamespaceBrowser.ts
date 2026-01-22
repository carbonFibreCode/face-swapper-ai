import * as runtime from "@prisma/client/runtime/index-browser";
export type * from "../models";
export type * from "./prismaNamespace";
export const Decimal = runtime.Decimal;
export const NullTypes = {
  DbNull: runtime.NullTypes.DbNull as new (secret: never) => typeof runtime.DbNull,
  JsonNull: runtime.NullTypes.JsonNull as new (secret: never) => typeof runtime.JsonNull,
  AnyNull: runtime.NullTypes.AnyNull as new (secret: never) => typeof runtime.AnyNull,
};
export const DbNull = runtime.DbNull;
export const JsonNull = runtime.JsonNull;
export const AnyNull = runtime.AnyNull;
export const ModelName = {
  User: "User",
  Session: "Session",
  Account: "Account",
  Verification: "Verification",
  Asset: "Asset",
  Template: "Template",
  Generation: "Generation",
} as const;
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export const TransactionIsolationLevel = {
  ReadUncommitted: "ReadUncommitted",
  ReadCommitted: "ReadCommitted",
  RepeatableRead: "RepeatableRead",
  Serializable: "Serializable",
} as const;
export type TransactionIsolationLevel =
  (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export const UserScalarFieldEnum = {
  id: "id",
  name: "name",
  email: "email",
  emailVerified: "emailVerified",
  image: "image",
  credits: "credits",
  plan: "plan",
  stripeCustomerId: "stripeCustomerId",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
} as const;
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export const SessionScalarFieldEnum = {
  id: "id",
  expiresAt: "expiresAt",
  token: "token",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
  ipAddress: "ipAddress",
  userAgent: "userAgent",
  userId: "userId",
} as const;
export type SessionScalarFieldEnum =
  (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum];
export const AccountScalarFieldEnum = {
  id: "id",
  accountId: "accountId",
  providerId: "providerId",
  userId: "userId",
  accessToken: "accessToken",
  refreshToken: "refreshToken",
  idToken: "idToken",
  accessTokenExpiresAt: "accessTokenExpiresAt",
  refreshTokenExpiresAt: "refreshTokenExpiresAt",
  scope: "scope",
  password: "password",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
} as const;
export type AccountScalarFieldEnum =
  (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum];
export const VerificationScalarFieldEnum = {
  id: "id",
  identifier: "identifier",
  value: "value",
  expiresAt: "expiresAt",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
} as const;
export type VerificationScalarFieldEnum =
  (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum];
export const AssetScalarFieldEnum = {
  id: "id",
  userId: "userId",
  name: "name",
  url: "url",
  thumbnailUrl: "thumbnailUrl",
  type: "type",
  size: "size",
  width: "width",
  height: "height",
  duration: "duration",
  createdAt: "createdAt",
} as const;
export type AssetScalarFieldEnum = (typeof AssetScalarFieldEnum)[keyof typeof AssetScalarFieldEnum];
export const TemplateScalarFieldEnum = {
  id: "id",
  thumbnailUrl: "thumbnailUrl",
  videoUrl: "videoUrl",
  tags: "tags",
  duration: "duration",
  isActive: "isActive",
  createdAt: "createdAt",
} as const;
export type TemplateScalarFieldEnum =
  (typeof TemplateScalarFieldEnum)[keyof typeof TemplateScalarFieldEnum];
export const GenerationScalarFieldEnum = {
  id: "id",
  userId: "userId",
  templateId: "templateId",
  assetId: "assetId",
  status: "status",
  failureReason: "failureReason",
  cost: "cost",
  providerJobId: "providerJobId",
  resultUrl: "resultUrl",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
} as const;
export type GenerationScalarFieldEnum =
  (typeof GenerationScalarFieldEnum)[keyof typeof GenerationScalarFieldEnum];
export const SortOrder = {
  asc: "asc",
  desc: "desc",
} as const;
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export const QueryMode = {
  default: "default",
  insensitive: "insensitive",
} as const;
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export const NullsOrder = {
  first: "first",
  last: "last",
} as const;
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
