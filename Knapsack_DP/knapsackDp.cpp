#include <iostream>

using namespace std;
struct Details
{
    int price;
    int weight;
    
};
int knapsack(Details a[],int n,int C,int dp[][1001])
{
    
    if(dp[n][C]!=-1)
        return dp[n][C];
    if(a[n].weight<=C)
    {
        if(C==0||n==0)
            return 0;
        return dp[n][C]=max(a[n].price+knapsack(a,n-1,C-a[n].weight,dp),knapsack(a,n-1,C,dp));
        
    }
    else
        return dp[n][C]=knapsack(a,n-1,C,dp);
}
int main()
{
    int W,n;   //n is the total number of items, W is capacity of knapsack
    cout<<"Enter the number of items ";
    cin>>n;
    cout<<endl;
    cout<<"Enter the capacity of knapsack ";
    cin>>W;
    Details arr[n]; //array of size n of type Details  
    for(int i=0;i<n;i++)
    {
        cout<<"Enter the price of Item-"<<i+1<<endl;
        cin>>arr[i].price;
        cout<<endl;
        cout<<"Enter the Weight of Item-"<<i+1<<endl;
        cin>>arr[i].weight;
        cout<<endl;
    }

    //dp 2-D array is used for memoizations 
    int dp[n+1][1001];
    for(int i=0;i<n+1;i++)
        for(int j=0;j<W+1;j++)
            dp[i][j]=-1;
    cout << "Maximum value we can obtain = "<< knapsack(arr, n-1, W, dp);
    return 0;
}
