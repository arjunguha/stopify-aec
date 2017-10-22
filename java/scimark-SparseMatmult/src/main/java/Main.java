public class Main
{

  public static void main(String[] args) {

		measureSparseMatmult(1000, 5000, 0.0, new Random(113));
  }

 private static double[] RandomVector(int N, Random R)
	{
		double A[] = new double[N];

		for (int i=0; i<N; i++)
			A[i] = R.nextDouble();
		return A;
	}


	public static double measureSparseMatmult(int N, int nz, 
			double min_time, Random R)
	{
		// initialize vector multipliers and storage for result
		// y = A*y;

		double x[] = RandomVector(N, R);
		double y[] = new double[N];

		// initialize square sparse matrix
		//
		// for this test, we create a sparse matrix wit M/nz nonzeros
		// per row, with spaced-out evenly between the begining of the
		// row to the main diagonal.  Thus, the resulting pattern looks
		// like
		//             +-----------------+
		//             +*                +
		//             +***              +
		//             +* * *            +
		//             +** *  *          +
		//             +**  *   *        +
		//             +* *   *   *      +
		//             +*  *   *    *    +
		//             +*   *    *    *  + 
		//             +-----------------+
		//
		// (as best reproducible with integer artihmetic)
		// Note that the first nr rows will have elements past
		// the diagonal.

		int nr = nz/N; 		// average number of nonzeros per row
		int anz = nr *N;   // _actual_ number of nonzeros

			
		double val[] = RandomVector(anz, R);
		int col[] = new int[anz];
		int row[] = new int[N+1];

		row[0] = 0;	
		for (int r=0; r<N; r++)
		{
			// initialize elements for row r

			int rowr = row[r];
			row[r+1] = rowr + nr;
			int step = r/ nr;
			if (step < 1) step = 1;   // take at least unit steps


			for (int i=0; i<nr; i++)
				col[rowr+i] = i*step;
				
		}

		int cycles=1;

		for (int j = 0; j < 18; j++) {
			matmult(y, val, row, col, x, cycles);

			cycles *= 2;
		}
		// approx Mflops
		return 0;
	}
		
	/* multiple iterations used to make kernel have roughly
		same granulairty as other Scimark kernels. */

	public static double num_flops(int N, int nz, int num_iterations)
	{
		/* Note that if nz does not divide N evenly, then the
		   actual number of nonzeros used is adjusted slightly.
		*/
		int actual_nz = (nz/N) * N;
		return ((double)actual_nz) * 2.0 * ((double) num_iterations);
	}


	/* computes  a matrix-vector multiply with a sparse matrix
		held in compress-row format.  If the size of the matrix
		in MxN with nz nonzeros, then the val[] is the nz nonzeros,
		with its ith entry in column col[i].  The integer vector row[]
		is of size M+1 and row[i] points to the begining of the
		ith row in col[].  
	*/

	public static void matmult( double y[], double val[], int row[],
		int col[], double x[], int NUM_ITERATIONS)
	{
		int M = row.length - 1;

		for (int reps=0; reps<NUM_ITERATIONS; reps++)
		{
		
			for (int r=0; r<M; r++)
			{
				double sum = 0.0; 
				int rowR = row[r];
				int rowRp1 = row[r+1];
				for (int i=rowR; i<rowRp1; i++)
					sum += x[ col[i] ] * val[i];
				y[r] = sum;
			}
		}
	}

}
