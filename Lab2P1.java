import java.util.Scanner;
class Lab2P1{
	public static void main(String[] args){
		Scanner s = new Scanner(System.in);
		int a = s.nextInt();
		s.nextLine();
		String op = s.nextLine();
		switch(op){
			case "++" : 
			System.out.println("post : " + (a++));
			System.out.println("pre:" + (++a));
			break;
			case "--" :
			System.out.println("post :" + (a--));
			System.out.println("pre : " + (a--));
			break;
			case "+" :
				    a = +a;
				    System.out.println("unary: " + (a));
				    break;
				    case "-":
				    	a = -a;
				    	System.out.println("unary:" + (a));
				    	case "~":
				    		a = ~a;
				    		System.out.println("unary: " + (a));
				    		break;
			default:
			System.out.println("enter the correct operator : ");
		
		}
	}
}