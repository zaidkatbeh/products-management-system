import { Category } from "./Category.mjs";

export class CategoryService {
    categories = [];
 feature/PMS-4-addCategory
    // this function is already made from the last branch due to the need of it 
    searchBy(column,input) {
        let result = -1;
         this.categories.find((category) => {
            if (category[column] == input) {
                result = category;
                return;
    getAll() {
        return this.categories;
    }
    getLastID() {
        let maxID = 1;
        this.categories.map((category) => {
            if (category.id > maxID) {
                maxID = category.id
            }
        });
        return maxID;

    }
    add(name) {
        if (typeof name != "string") {
            return -1;
        }
        if (this.searchBy("name",name) != -1) {
            console.log("there is already a category with this name");
            return -1;
        }
        return this.categories.push(new Category(this.getLastID() + 1, name));
    }
}
