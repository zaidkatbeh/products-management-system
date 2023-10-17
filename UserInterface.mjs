import readline from "readline";

import { CategoryService } from "./CategoryService.mjs"
import { log } from "console";

class UserInterface {
    readl
    constructor() {
        this.readl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
    }
    mainUI() {
        console.clear();
        console.log("-".repeat(60));
        console.log("Welcome to mall products manegment system (MPMS)");
        console.log("-".repeat(60));
        this.printOptions("Manage Categories", "Manage Subcategories", "Manage Products", "Manage Offers")
        this.readl.question("enter the number of the procces you want to do? ", (answer) => {
            switch (answer) {
                case "1":
                    this.manageCategories();
                    break;
                case "2":
                    this.manageSubcategories();
                    break;
                case "3":
                    this.manageProducts();
                    break;
                case "4":
                    this.manageOffers();
                    break;
                case "5":
                    console.log("app is closed");
                    this.readl.close();
                    break;
                default:
                    console.log("please enter a valid number");
                    this.mainUI();
            }
        });
    }

    manageCategories() {
        console.clear();
        console.log("-".repeat(60));
        console.log("MPMS--->manage categories");
        console.log("-".repeat(60));
        this.printOptions(" get all", "search by", "add new", "edit", "delete", "go back");
        this.readl.question("enter the number of the procces you want to do? ", (answer) => {
            switch (answer) {
                case "1":
                    console.log("get all");
                    break;
                case "2":
                    console.log("search by");
                    break;
                case "3":
                    this.addCategory();
                    break;
                case "4":
                    console.log("edit");
                    break;
                case "5":
                    console.log("delete");
                    break;
                case "6":
                    this.mainUI();
                    break;
                case "7":
                    console.log("app closed");
                    this.readl.close();
                    break;
                default:
                    console.log("please enter a valid number");
                    this.manageCategories();
            }
        })
    }

    manageSubcategories() {
        console.clear();
        console.log("-".repeat(60));
        console.log("MPMS--->manage subcategories");
        console.log("-".repeat(60));
        this.printOptions(" get all", "search by", "add new", "edit", "delete", "go back");
        this.readl.question("enter the number of the procces you want to do? ", (answer) => {
            switch (answer) {
                case "1":
                    console.log("get all");
                    break;
                case "2":
                    console.log("search by");
                    break;
                case "3":
                    console.log("add new ");
                    break;
                case "4":
                    console.log("edit");
                    break;
                case "5":
                    console.log("delete");
                    break;
                case "6":
                    this.mainUI();
                    break;
                case "7":
                    console.log("app closed");
                    this.readl.close();
                    break;
                default:
                    console.log("please enter a valid number");
                    this.manageCategories();
            }
        })
    }

    manageProducts() {
        console.clear();
        console.log("-".repeat(60));
        console.log("MPMS--->manage products");
        console.log("-".repeat(60));
        this.printOptions(" get all", "search by", "add new", "edit", "delete", "go back");
        this.readl.question("enter the number of the procces you want to do? ", (answer) => {
            switch (answer) {
                case "1":
                    console.log("get all");
                    break;
                case "2":
                    console.log("search by");
                    break;
                case "3":
                    console.log("add new ");
                    break;
                case "4":
                    console.log("edit");
                    break;
                case "5":
                    console.log("delete");
                    break;
                case "6":
                    this.mainUI();
                    break;
                case "7":
                    console.log("app closed");
                    this.readl.close();
                    break;
                default:
                    console.log("please enter a valid number");
                    this.manageCategories();
            }
        })
    }

    manageOffers() {
        console.clear();
        console.log("-".repeat(60));
        console.log("MPMS--->manage offers");
        console.log("-".repeat(60));
        this.printOptions(" get all", "search by", "add new", "edit", "delete", "go back");
        this.readl.question("enter the number of the procces you want to do? ", (answer) => {
            switch (answer) {
                case "1":
                    console.log("get all");
                    break;
                case "2":
                    console.log("search by");
                    break;
                case "3":
                    console.log("add new ");
                    break;
                case "4":
                    console.log("edit");
                    break;
                case "5":
                    console.log("delete");
                    break;
                case "6":
                    this.mainUI();
                    break;
                case "7":
                    console.log("app closed");
                    this.readl.close();
                    break;
                default:
                    console.log("please enter a valid number");
                    this.manageCategories();
            }
        })
    }

    printOptions(...options) {
        options.forEach((option, currentIndex) => {
            console.log(`${currentIndex + 1} - ${option}.`);
        });
        console.log(`${options.length + 1} - close the App`);
    }

    addCategory() {
        console.clear();
        console.log("-".repeat(60));
        console.log("MPMS--->manage categories--->add new");
        console.log("-".repeat(60));
        this.readl.question("enter the name of the category you want to add : ", (answer) => {
            let addingResult = CategoryService.add(answer);
            console.log(addingResult == -1 ? "adding failed" :"category has been added"  );
            setTimeout(() => {
                this.manageCategories();
            },1000)
        })

    }
}
let userInterface = new UserInterface();
userInterface.mainUI();