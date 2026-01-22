PROBLEMS.push({
  id: 1,
  title: "Coffee Shop Bill (Data Types Only)",

  tags: ["data types", "variables", "input", "output"],

  statement: [
    "A small coffee shop wants a simple program to calculate a customer’s bill. " +
    "The program must read the customer’s name, the price of one drink, and the number " +
    "of drinks ordered. It should then calculate the total cost and display a short " +
    "summary of the order. " +
    "The program does not need to perform any validation and should assume that all " +
    "input values are valid. " +
    "The output must be printed exactly as shown, with no additional text.\n\n" +
    "Input:\n" +
    "- A string representing the customer name\n" +
    "- A decimal number representing the price of one drink\n" +
    "- An integer representing the number of drinks ordered\n\n" +
    "Output:\n" +
    "- Customer name\n" +
    "- Number of drinks\n" +
    "- Price per drink\n" +
    "- Total price"
  ],

  steps: [
    "Create a Scanner object for input.",
    "Read the customer name as a string.",
    "Read the drink price as a double.",
    "Read the number of drinks as an integer.",
    "Calculate the total price by multiplying price and quantity.",
    "Print the customer name.",
    "Print the number of drinks ordered.",
    "Print the price per drink.",
    "Print the total price."
  ],

  snippets: [
    `Scanner sc = new Scanner(System.in);`,

    `System.out.println("Enter your name:");
   String name = sc.nextLine();`,

    `System.out.println("Enter price:");
   double price = sc.nextDouble();`,

    `System.out.println("Enter quantity:");
   int quantity = sc.nextInt();`,

    `double total = price * quantity;`,

    `System.out.println("Customer: " + name);`,

    `System.out.println("Drinks: " + quantity);`,

    `System.out.println("Price per drink: £" + price);`,

    `System.out.println("Total: £" + total);`
  ],

  hints: [
    "Use String for text values.",
    "Use double for prices because they may contain decimals.",
    "Use int for whole numbers.",
    "Multiplication is used to calculate the total price."
  ],

  mistakes: [
    "Using int instead of double for the price.",
    "Reading the inputs in the wrong order.",
    "Forgetting to multiply price by quantity.",
    "Using next() instead of nextLine() for the customer name."
  ],

  solution: 
`import java.util.*;

public class Main {
  public static void main(String[] args) {

    Scanner sc = new Scanner(System.in);

    String name = sc.nextLine();
    double price = sc.nextDouble();
    int quantity = sc.nextInt();

    double total = price * quantity;

    System.out.println("Customer: " + name);
    System.out.println("Drinks: " + quantity);
    System.out.println("Price per drink: £" + price);
    System.out.println("Total: £" + total);
  }
}`,

  why:
    "This problem focuses entirely on understanding Java data types. " +
    "Students practise choosing between String, int, and double, " +
    "reading input values, storing them in variables, performing a calculation, " +
    "and printing results without using any conditionals or loops."
});
