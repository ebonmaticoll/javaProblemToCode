PROBLEMS.push({
  id: 1,
  title: "Ticket Price by Age",

  tags: ["if/else", "validation"],

  statement: [
    "A cinema sells tickets at different prices depending on the customer’s age. " +
    "Your program must read a single integer representing the customer’s age and " +
    "print exactly one line describing the ticket category and price. " +
    "If the age is less than 0 or greater than 120, the input should be considered invalid " +
    "and the program must print \"Invalid age\". " +
    "For valid ages, customers aged 0 to 12 pay £5 and are classified as Child tickets, " +
    "ages 13 to 17 pay £7 for a Teen ticket, ages 18 to 64 pay £10 for an Adult ticket, " +
    "and customers aged 65 or above pay £6 for a Senior ticket. " +
    "The output must consist only of the ticket label followed by a space, the pound symbol (£), " +
    "and the price with no additional text. "
 ],

  steps: [
    "Read the age.",
    "Validate that age is between 0 and 120.",
    "Create variables for label and price.",
    "Use if / else-if to determine the category and assign the correct price.",
    "Print the result."
  ],

  snippets: [
    `Scanner sc = new Scanner(System.in);
int age = sc.nextInt();`,

    `if (age < 0 || age > 120) {
  System.out.println("Invalid age");
  return;
}`,

    `String label;
int price;`,

    `if (age <= 12) {
  label = "Child";
  price = 5;
} else if (age <= 17) {
  label = "Teen";
  price = 7;
} else if (age <= 64) {
  label = "Adult";
  price = 10;
} else {
  label = "Senior";
  price = 6;
}`,

    `System.out.println(label + " £" + price);`
  ],

  hints: [
    "Always validate input first.",
    "Else-if ensures only one category runs."
  ],

  mistakes: [
    "Forgetting to stop after invalid age.",
    "Wrong boundary values."
  ],

  solution: `...`,
  why: "Teaches validation before decision logic."
});
