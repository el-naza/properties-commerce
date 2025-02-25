/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

/**
 * Supported timezones in IANA format.
 *
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "supportedTimezones".
 */
export type SupportedTimezones =
  | 'Pacific/Midway'
  | 'Pacific/Niue'
  | 'Pacific/Honolulu'
  | 'Pacific/Rarotonga'
  | 'America/Anchorage'
  | 'Pacific/Gambier'
  | 'America/Los_Angeles'
  | 'America/Tijuana'
  | 'America/Denver'
  | 'America/Phoenix'
  | 'America/Chicago'
  | 'America/Guatemala'
  | 'America/New_York'
  | 'America/Bogota'
  | 'America/Caracas'
  | 'America/Santiago'
  | 'America/Buenos_Aires'
  | 'America/Sao_Paulo'
  | 'Atlantic/South_Georgia'
  | 'Atlantic/Azores'
  | 'Atlantic/Cape_Verde'
  | 'Europe/London'
  | 'Europe/Berlin'
  | 'Africa/Lagos'
  | 'Europe/Athens'
  | 'Africa/Cairo'
  | 'Europe/Moscow'
  | 'Asia/Riyadh'
  | 'Asia/Dubai'
  | 'Asia/Baku'
  | 'Asia/Karachi'
  | 'Asia/Tashkent'
  | 'Asia/Calcutta'
  | 'Asia/Dhaka'
  | 'Asia/Almaty'
  | 'Asia/Jakarta'
  | 'Asia/Bangkok'
  | 'Asia/Shanghai'
  | 'Asia/Singapore'
  | 'Asia/Tokyo'
  | 'Asia/Seoul'
  | 'Australia/Sydney'
  | 'Pacific/Guam'
  | 'Pacific/Noumea'
  | 'Pacific/Auckland'
  | 'Pacific/Fiji';

export interface Config {
  auth: {
    admins: AdminAuthOperations;
  };
  blocks: {};
  collections: {
    media: Media;
    admins: Admin;
    cities: City;
    areas: Area;
    'property-categories': PropertyCategory;
    'property-features': PropertyFeature;
    'property-statuses': PropertyStatus;
    properties: Property;
    shortlets: Shortlet;
    'id-documents': IdDocument;
    'shortlet-bookings': ShortletBooking;
    messages: Message;
    contacts: Contact;
    inquiries: Inquiry;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    media: MediaSelect<false> | MediaSelect<true>;
    admins: AdminsSelect<false> | AdminsSelect<true>;
    cities: CitiesSelect<false> | CitiesSelect<true>;
    areas: AreasSelect<false> | AreasSelect<true>;
    'property-categories': PropertyCategoriesSelect<false> | PropertyCategoriesSelect<true>;
    'property-features': PropertyFeaturesSelect<false> | PropertyFeaturesSelect<true>;
    'property-statuses': PropertyStatusesSelect<false> | PropertyStatusesSelect<true>;
    properties: PropertiesSelect<false> | PropertiesSelect<true>;
    shortlets: ShortletsSelect<false> | ShortletsSelect<true>;
    'id-documents': IdDocumentsSelect<false> | IdDocumentsSelect<true>;
    'shortlet-bookings': ShortletBookingsSelect<false> | ShortletBookingsSelect<true>;
    messages: MessagesSelect<false> | MessagesSelect<true>;
    contacts: ContactsSelect<false> | ContactsSelect<true>;
    inquiries: InquiriesSelect<false> | InquiriesSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: string;
  };
  globals: {};
  globalsSelect: {};
  locale: null;
  user: Admin & {
    collection: 'admins';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface AdminAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "admins".
 */
export interface Admin {
  id: string;
  name?: string | null;
  phone: string;
  role?: ('Super Admin' | 'Agent') | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "cities".
 */
export interface City {
  id: string;
  name: string;
  stateOrCounty: string;
  country: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "areas".
 */
export interface Area {
  id: string;
  name: string;
  city: string | City;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "property-categories".
 */
export interface PropertyCategory {
  id: string;
  title: string;
  description?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "property-features".
 */
export interface PropertyFeature {
  id: string;
  title: string;
  description?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "property-statuses".
 */
export interface PropertyStatus {
  id: string;
  title: string;
  description?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "properties".
 */
export interface Property {
  id: string;
  title: string;
  description?: string | null;
  price: number;
  categories: (string | PropertyCategory)[];
  area: string | Area;
  address?: string | null;
  /**
   * Uses a google maps location coordinates for the map feature in the search page
   *
   * @minItems 2
   * @maxItems 2
   */
  gpsCoordinates?: [number, number] | null;
  media: (string | Media)[];
  bedroomsCount?: number[] | null;
  bathroomsCount?: number[] | null;
  squareMeters?: number[] | null;
  yearBuilt?: string | null;
  features?: (string | PropertyFeature)[] | null;
  youtubeVideo?: string | null;
  additionalDeatils?:
    | {
        title: string;
        value: string;
        id?: string | null;
      }[]
    | null;
  isFeatured?: boolean | null;
  statuses?: (string | PropertyStatus)[] | null;
  uploadedBy?: (string | null) | Admin;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "shortlets".
 */
export interface Shortlet {
  id: string;
  title: string;
  description?: string | null;
  price: number;
  area: string | Area;
  address?: string | null;
  /**
   * Uses a google maps location coordinates for the map feature in the search page
   *
   * @minItems 2
   * @maxItems 2
   */
  gpsCoordinates?: [number, number] | null;
  media: (string | Media)[];
  bedroomsCount?: number[] | null;
  bathroomsCount?: number[] | null;
  squareMeters?: number[] | null;
  yearBuilt?: string | null;
  features?: (string | PropertyFeature)[] | null;
  youtubeVideo?: string | null;
  additionalDeatils?:
    | {
        title: string;
        value: string;
        id?: string | null;
      }[]
    | null;
  isFeatured?: boolean | null;
  statuses?: (string | PropertyStatus)[] | null;
  uploadedBy?: (string | null) | Admin;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "id-documents".
 */
export interface IdDocument {
  id: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "shortlet-bookings".
 */
export interface ShortletBooking {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  shortlet: string | Shortlet;
  checkInDay?: string | null;
  checkOutDay?: string | null;
  idType: 'NATIONAL ID' | 'PASSPORT' | 'DRIVERS LICENSE' | 'VOTERS CARD';
  idDocument: string | IdDocument;
  /**
   * Only the Super Admin can confirm payments to approve the booking
   */
  paymentConfirmed?: boolean | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "messages".
 */
export interface Message {
  id: string;
  fullName: string;
  email: string;
  phone?: string | null;
  message: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "contacts".
 */
export interface Contact {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  whatsapp?: string | null;
  identifiesAs: 'New Customer' | 'Returning Customer' | 'An Agent';
  message?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "inquiries".
 */
export interface Inquiry {
  id: string;
  type: 'Purchase' | 'Rent' | 'Mortgage';
  firstName: string;
  lastName: string;
  identifiesAsA: 'First Time Buyer' | 'Real Estate Investor' | 'Real Estate Agent';
  email: string;
  phone: string;
  categoryInterested: string | PropertyCategory;
  maxPrice?: number | null;
  numberOfBeds?: number | null;
  message?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: string;
  document?:
    | ({
        relationTo: 'media';
        value: string | Media;
      } | null)
    | ({
        relationTo: 'admins';
        value: string | Admin;
      } | null)
    | ({
        relationTo: 'cities';
        value: string | City;
      } | null)
    | ({
        relationTo: 'areas';
        value: string | Area;
      } | null)
    | ({
        relationTo: 'property-categories';
        value: string | PropertyCategory;
      } | null)
    | ({
        relationTo: 'property-features';
        value: string | PropertyFeature;
      } | null)
    | ({
        relationTo: 'property-statuses';
        value: string | PropertyStatus;
      } | null)
    | ({
        relationTo: 'properties';
        value: string | Property;
      } | null)
    | ({
        relationTo: 'shortlets';
        value: string | Shortlet;
      } | null)
    | ({
        relationTo: 'id-documents';
        value: string | IdDocument;
      } | null)
    | ({
        relationTo: 'shortlet-bookings';
        value: string | ShortletBooking;
      } | null)
    | ({
        relationTo: 'messages';
        value: string | Message;
      } | null)
    | ({
        relationTo: 'contacts';
        value: string | Contact;
      } | null)
    | ({
        relationTo: 'inquiries';
        value: string | Inquiry;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'admins';
    value: string | Admin;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'admins';
    value: string | Admin;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "admins_select".
 */
export interface AdminsSelect<T extends boolean = true> {
  name?: T;
  phone?: T;
  role?: T;
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "cities_select".
 */
export interface CitiesSelect<T extends boolean = true> {
  name?: T;
  stateOrCounty?: T;
  country?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "areas_select".
 */
export interface AreasSelect<T extends boolean = true> {
  name?: T;
  city?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "property-categories_select".
 */
export interface PropertyCategoriesSelect<T extends boolean = true> {
  title?: T;
  description?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "property-features_select".
 */
export interface PropertyFeaturesSelect<T extends boolean = true> {
  title?: T;
  description?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "property-statuses_select".
 */
export interface PropertyStatusesSelect<T extends boolean = true> {
  title?: T;
  description?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "properties_select".
 */
export interface PropertiesSelect<T extends boolean = true> {
  title?: T;
  description?: T;
  price?: T;
  categories?: T;
  area?: T;
  address?: T;
  gpsCoordinates?: T;
  media?: T;
  bedroomsCount?: T;
  bathroomsCount?: T;
  squareMeters?: T;
  yearBuilt?: T;
  features?: T;
  youtubeVideo?: T;
  additionalDeatils?:
    | T
    | {
        title?: T;
        value?: T;
        id?: T;
      };
  isFeatured?: T;
  statuses?: T;
  uploadedBy?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "shortlets_select".
 */
export interface ShortletsSelect<T extends boolean = true> {
  title?: T;
  description?: T;
  price?: T;
  area?: T;
  address?: T;
  gpsCoordinates?: T;
  media?: T;
  bedroomsCount?: T;
  bathroomsCount?: T;
  squareMeters?: T;
  yearBuilt?: T;
  features?: T;
  youtubeVideo?: T;
  additionalDeatils?:
    | T
    | {
        title?: T;
        value?: T;
        id?: T;
      };
  isFeatured?: T;
  statuses?: T;
  uploadedBy?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "id-documents_select".
 */
export interface IdDocumentsSelect<T extends boolean = true> {
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "shortlet-bookings_select".
 */
export interface ShortletBookingsSelect<T extends boolean = true> {
  fullName?: T;
  email?: T;
  phone?: T;
  shortlet?: T;
  checkInDay?: T;
  checkOutDay?: T;
  idType?: T;
  idDocument?: T;
  paymentConfirmed?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "messages_select".
 */
export interface MessagesSelect<T extends boolean = true> {
  fullName?: T;
  email?: T;
  phone?: T;
  message?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "contacts_select".
 */
export interface ContactsSelect<T extends boolean = true> {
  fullName?: T;
  email?: T;
  phone?: T;
  whatsapp?: T;
  identifiesAs?: T;
  message?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "inquiries_select".
 */
export interface InquiriesSelect<T extends boolean = true> {
  type?: T;
  firstName?: T;
  lastName?: T;
  identifiesAsA?: T;
  email?: T;
  phone?: T;
  categoryInterested?: T;
  maxPrice?: T;
  numberOfBeds?: T;
  message?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}