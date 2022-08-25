#include<iostream>
using namespace std;
class A{
	public:
		//Methode Overriding virtual and simple
		virtual void show(){
			cout<<"Message A"<<endl;
		}
};
class B:public A{
	public:
		void show(){
			cout<<"Message B"<<endl;
		}
};
int main(){
	A *ptr;
	B bdrived;
	ptr=&bdrived;
	cout<<"MethodeOverRiding wiht virtual keyword: ";
	ptr->show();
	cout<<"MethodeOverRiding Simple: "<<endl;
	A a;
	B b;
	a.show();
	b.show();
}
