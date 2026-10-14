export class SnapFace{

    location?: string;

    constructor(public title: string,
                public description: string,
                public createdAt: Date,
                public snaps: number,
                public imageUrl: string
     
    ){}

    setLocation(location: string): void {
        this.location = location;
    }

}