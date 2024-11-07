package JavaProject;

import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Scanner;

// Abstract base class Employee
abstract class Employee {
    protected String name;
    protected double salary;

    public Employee(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }

    // Abstract method for work
    public abstract void work();
}

// Manager class that extends Employee
class Manager extends Employee {
    public Manager(String name, double salary) {
        super(name, salary);
    }

    @Override
    public void work() {
        System.out.println("Manager " + name + " is managing the project.");
    }
}

// Developer class that extends Employee
class Developer extends Employee {
    public Developer(String name, double salary) {
        super(name, salary);
    }

    @Override
    public void work() {
        System.out.println("Developer " + name + " is coding the application.");
    }
}

// Intern class that extends Employee
class Intern extends Employee {
    public Intern(String name, double salary) {
        super(name, salary);
    }

    @Override
    public void work() {
        System.out.println("Intern " + name + " is learning and assisting the team.");
    }
}

// Main class to demonstrate polymorphism and remove duplicates
public class EmployeeManagement {

    public static void main(String[] args) {
        // Demonstrate polymorphism with Employee list
        List<Employee> employees = new ArrayList<>();
        employees.add(new Manager("John", 80000));
        employees.add(new Developer("Alice", 70000));
        employees.add(new Intern("Bob", 30000));

        // Call work() method on each employee
        for (Employee employee : employees) {
            employee.work();
        }

        // Task 2: Remove duplicate characters from a string
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String input = scanner.nextLine();
        String result = removeDuplicates(input);
        System.out.println("The string with duplicate characters removed is: " + result);
    }

    // Function to remove duplicate characters while preserving order
    public static String removeDuplicates(String str) {
        LinkedHashSet<Character> charSet = new LinkedHashSet<>();
        for (char c : str.toCharArray()) {
            charSet.add(c);
        }
        StringBuilder result = new StringBuilder();
        for (char c : charSet) {
            result.append(c);
        }
        return result.toString();
    }
}
