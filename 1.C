#include<sys/types.h>
#include <fcntl.h>
#include<sys/stat.h>
#include<stdio.h>
#include<unistd.h>

int main(){
  int fd;
  char buffer[80];
  static char message[]="Hello World!";
  fd=open("qfile.txt",O_RDWR);
  if(fd != -1){
    printf("qfile.txt opened with read/write access\n");
    write(fd,message,sizeof(message));
    lseek(fd,0,0);
    read(fd,buffer,sizeof(message));
    printf("%s - was written to qfile.txt \n",buffer);
    close(fd);
  }
}
