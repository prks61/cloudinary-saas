/**
 * Represents a video object with various properties.
 * 
 * @interface Video
 * 
 * @property {string} id - The unique identifier for the video.
 * @property {string} title - The title of the video.
 * @property {string} description - A brief description of the video.
 * @property {string} publicId - The public identifier for the video.
 * @property {number} originalSize - The original size of the video in bytes.
 * @property {number} compressedSize - The compressed size of the video in bytes.
 * @property {number} duration - The duration of the video in seconds.
 * @property {Date} createdAt - The date and time when the video was created.
 * @property {Date} updatedAt - The date and time when the video was last updated.
 */
export interface Video {
  id: string;
  title: string;
  description: string;
  publicId: string;
  originalSize: number;
  compressedSize: number;
  duration: number;
  createdAt: Date;
  updatedAt: Date;
}
