import java.util.LinkedHashSet;
import java.util.Scanner;

public class RemoveDuplicates {
    public static String removeDuplicates(String input) {
        LinkedHashSet<Character> charSet = new LinkedHashSet<>();
        
        for (char c : input.toCharArray()) {
            charSet.add(c);
        }
        
        StringBuilder result = new StringBuilder();
        for (char c : charSet) {
            result.append(c);
        }
        
        return result.toString();
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String userInput = scanner.nextLine();
        String result = removeDuplicates(userInput);
        System.out.println("The string with duplicate characters removed is: " + result);
    }
}
