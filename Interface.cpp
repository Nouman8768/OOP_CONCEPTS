#include<iostream>
using namespace std;

class Vehicle{
	public:
	virtual int vprice(int price)=0;
};
class Bus{
public:
virtual int price(int p)=0;
};
class Car:public Vehicle,public Bus{
	public:
		int vprice(int price){
			return price;
		}
		int price(int p){
			return p;
		}
};

int main(){
	Car c;
	Bus *b;
	Vehicle *v;
	v=&c;
	cout<<"Price of Car: "<<v->vprice(20000);
	b=&c;
	cout<<endl<<"Price of Bus: "<<b->price(50000);
	

}
