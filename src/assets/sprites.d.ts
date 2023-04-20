/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Width = number;
export type Height = number;
export type Left = number;
export type Top = number;
export type Width1 = number;
export type Height1 = number;
export type AppSchema = string;
export type VersionSchema = string;
export type ImageSchema = string;
export type FormatSchema = string;
export type ScaleSchema = string;
export type SmartupdateSchema = string;

export interface TexturePackerSchema {
	frames: FramesSchema;
	meta?: MetaSchema;
}
/**
 * map of images names and sprite infos
 */
export interface FramesSchema {
	[k: string]: SpriteSchema;
}
/**
 * This interface was referenced by `FramesSchema`'s JSON-Schema definition
 * via the `patternProperty` "^([A-Za-z_\.])\.png".
 */
export interface SpriteSchema {
	rotated?: boolean;
	frame?: SizeAndPositionSchema;
	trimmed?: boolean;
	sourceSize?: SizeSchema;
	spriteSourceSize?: SizeAndPositionSchema;
}
export interface SizeAndPositionSchema {
	w: Width;
	h: Height;
	x: Left;
	y: Top;
}
export interface SizeSchema {
	w: Width1;
	h: Height1;
}
export interface MetaSchema {
	app?: AppSchema;
	version?: VersionSchema;
	image?: ImageSchema;
	format?: FormatSchema;
	size?: SizeSchema1;
	scale?: ScaleSchema;
	smartupdate?: SmartupdateSchema;
}
export interface SizeSchema1 {
	w: Width1;
	h: Height1;
}
