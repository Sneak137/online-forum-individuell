export type ThreadCategory = "THREAD" | "QNA";

export type User = {
	id?: string;
	userName: string;
	password: string
}

export type Thread = {
  id: string; // ÄNDRAT FRÅN NUMBER TILL STRING PGA FIREBASE 
	title: string;
	category: ThreadCategory;
	creationDate: string;
	description: string;
	creator: User;
}

export type QNAThread =  Thread & { //Type extension
	category: "QNA";
	isAnswered: boolean;
	answerId?: string;  //SVARETS ID
}

export type Comment = {
	id: string;
	thread: string;
	content: string;
	creator: User;
}