package javastudy;

public class StringExam {
	public static void main(String[] args) {
		String s = "Hello";
		int len = "Hello".length();
		
		String s2 = "Hello" + "World";
		String s3 = "Hello" + 3.141592;
		String s4 = 3.141592 + "Hello";
		String s5 = 3 + 4 + "Hello";
		String s6 = "Hello" + 3 + 4;
		
		System.out.println(s);
		System.out.println(len);
		System.out.println(s2);
		System.out.println(s3);
		System.out.println(s4);		
		System.out.println(s5);
		System.out.println(s6);	
		
		System.out.println(0xFFFFFFFF);	
	
	}

}
