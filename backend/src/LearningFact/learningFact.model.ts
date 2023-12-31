export class LearningFactModel {
    id?: string;
    packageName: string;
    recto: string;
    verso: string;


    constructor(id:string,  packageName: string, recto: string, verso: string) {
        this.id = id;
        this.packageName = packageName;
        this.recto = recto;
        this.verso = verso;
    }


}