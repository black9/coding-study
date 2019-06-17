package javastudy;

public class Looptotal {
	public static void main(String[] args) {
		for (int i=1; i<10; i++) {
			for(int j=1; j<10; j++) {
				System.out.println(j+"*"+i + "=" + i*j);
				System.out.println("\t");
			}
			System.out.println();
		}
	}
}
/* 
result
1*1=1
2*1=2
3*1=3
  .
  .
  .
*/


/*
package javastudy;

public class Looptotal {
	public static void main(String[] args) {
		for (int i=1; i<10; i++) {
			for(int j=1; j<10; j++) {
				System.out.println(i+"*"+j + "=" + i*j);
				System.out.println("\t");
			}
			System.out.println();
		}
	}
}
*/

/* 
result
1*1=1
1*2=2
1*3=3
  .
  .
  .
*/
