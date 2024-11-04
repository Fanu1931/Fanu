// Abstract base class
abstract class Employee {
    protected String name;
    protected double salary;

    public Employee(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }

    public abstract String work();
}

// Subclass for Manager
class Manager extends Employee {
    public Manager(String name, double salary) {
        super(name, salary);
    }

    @Override
    public String work() {
        return "Manager " + name + " is managing the project.";
    }
}

// Subclass for Developer
class Developer extends Employee {
    public Developer(String name, double salary) {
        super(name, salary);
    }

    @Override
    public String work() {
        return "Developer " + name + " is coding the application.";
    }
}

// Subclass for Intern
class Intern extends Employee {
    public Intern(String name, double salary) {
        super(name, salary);
    }

    @Override
    public String work() {
        return "Intern " + name + " is learning and assisting the team.";
    }
}

// Demonstration of polymorphism
public class EmployeeDemo {
    public static void main(String[] args) {
        Employee[] employees = {
            new Manager("John", 90000),
            new Developer("Alice", 80000),
            new Intern("Bob", 30000)
        };

        for (Employee employee : employees) {
            System.out.println(employee.work());
        }
    }
}
