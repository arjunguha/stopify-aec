public class Main
{
  private static double[][] RandomMatrix(int M, int N, Random R)
  {
  		double A[][] = new double[M][N];

        for (int i=0; i<N; i++)
			for (int j=0; j<N; j++)
            	A[i][j] = R.nextDouble();
		return A;
	}

	public static void main(String[] args) {


		double G[][] = RandomMatrix(300, 300, new Random(113));

		int cycles=1;
		for (int i = 0; i < 10; i++) {
			execute(1.25, G, cycles);

			cycles *= 2;
		}
	}
	
	public static final double num_flops(int M, int N, int num_iterations)
	{
		double Md = (double) M;
		double Nd = (double) N;
		double num_iterD = (double) num_iterations;

		return (Md-1)*(Nd-1)*num_iterD*6.0;
	}

	public static final void execute(double omega, double G[][], int 
			num_iterations)
	{
		int M = G.length;
		int N = G[0].length;

		double omega_over_four = omega * 0.25;
		double one_minus_omega = 1.0 - omega;

		// update interior points
		//
		int Mm1 = M-1;
		int Nm1 = N-1; 
		for (int p=0; p<num_iterations; p++)
		{
			for (int i=1; i<Mm1; i++)
			{
				double[] Gi = G[i];
				double[] Gim1 = G[i-1];
				double[] Gip1 = G[i+1];
				for (int j=1; j<Nm1; j++)
					Gi[j] = omega_over_four * (Gim1[j] + Gip1[j] + Gi[j-1] 
								+ Gi[j+1]) + one_minus_omega * Gi[j];
			}
		}
	}
}
			
