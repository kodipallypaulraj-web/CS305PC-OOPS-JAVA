import java.util.Scanner;
class Lab2P2{
	public static void main(String... args){
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		
		System.out.println("the output is :" + n++ + ++n);
		System.out.println("the output is :" + (n++ + ++n));
		System.out.println(n++ + ++n + " the output is: ");
		
		
	}
}