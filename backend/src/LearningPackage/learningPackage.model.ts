export class LearningPackageModel {
    id?: string;
    title: string;
    description: string;
    category: string;
    difficulty: number;

    constructor(id: string, title: string, description: string, category: string, difficulty: number) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.category = category;
        this.difficulty = difficulty;
    }

}



