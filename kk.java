import java.util.*;
class kk{
    public static void main(String[] args) {
        // System.out.println(printFibunacchi(10));
        // fibonacci(10);
        printFibonacci(0, 1, 10);
    }


    public static int printFibunacchi(int n){
        if(n == 0 || n == 1){
            // System.out.println(n);
            return n;
        }
        int next = printFibunacchi(n-1) + printFibunacchi(n-2);
        System.out.println(next);
        return next;
    }
    public static int fibonacci(int n) {
        if (n <= 1) {
            System.out.print(n + " ");
            return n;
        } else {
            int result = fibonacci(n - 1) + fibonacci(n - 2);
            System.out.print(result + " ");
            return result;
        }
    }

    public static void printFibonacci(int val_1, int val_2, int num){
        //Base Case
        if(num == 0)
        return;
        //Printing the next Fibonacci number
        System.out.print( val_1 + val_2 + " ");
        //Recursively calling for printing Fibonacci for remaining length
        printFibonacci(val_2, val_1+val_2, --num);
        }
}