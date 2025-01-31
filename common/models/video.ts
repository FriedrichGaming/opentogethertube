export interface VideoId {
	service: string
	id: string
}

export interface VideoMetadata {
	title: string
	description: string
	length: number
	thumbnail: string
	mime: string
	highlight?: true
	hls_url?: string
	dash_url?: string
}

export type Video = VideoId & Partial<VideoMetadata>
