import java.util.Scanner;
class Lab3P3{
	public static void main(String...args){
		Lab3P3 l = new Lab3P3();
		l.show();
		l.show(10);
		//l.display("string");
	}
	public void show(){
		System.out.println("without para");
	}
	public void show(int x){
		System.out.println("the parameter " + x);
	}
	
	
}