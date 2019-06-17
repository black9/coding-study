package javastudy;

public class TwoDarray {

	public static void main(String[] args) {
		int [][] a= new int [5][];
		for (int i = 0; i < a.length; i++) {
			a[i] = new int[i];
			for (int j = 0; j < a[i].length; j++) {
				a[i][j] = i*a.length + j;
			}
		}
		for (int i = 0; i < a.length; i++) {
			for (int j = 0; j < a[i].length; j++) {
				System.out.printf("%d", a[i][j]);
				}
			System.out.println();
			}
	}
}
