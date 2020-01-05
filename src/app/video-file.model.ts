export class VideoFile {
    url:string;

    public constructor(init?: Partial<VideoFile>){
        Object.assign(this, init)
        this.url = "";
    }
}
