# w10-wsl2-dev-env
Set of instructions and assets to build a development environment on Windows10 with WSL2 (Windows Subsystem for Linux), docker and others...

## Prerequisites

* Windows 10 (Home edition is fine) version 2004 or higher

## Install WSL2

* Enable WSL2 and virtual machine feature (see https://docs.microsoft.com/en-us/windows/wsl/install-win10)
* Update linux Kernel (Using windows10 update feature)
* Set wsl2 as the default version: 
```
wsl --set-default-version 2
```

## Install Linux

* Go to Microsoft Store and search for Linux (I've installed Ubuntu 20.04 LTS) 
* Run Linux (the first time it will ask to create a new user)
* If you got an error on file system compression or crypto, go to Folder: C:\Users\<YOUR_USER>\AppData\Local\Packages\<YOUR_LINUX_DISTRO> and Right Click -> Properties -> General -> Advanced: remove the flag from "Compress contents to save disk space"

## Useful WSL commands

* Set a linux distro as the default distro:
```
wsl --set-default <distro_name>
```
* List all VMs:
```
wsl -l -v
```

## Install Visual Studio Code and usefull plugins

* Install Visual Studio Code: https://code.visualstudio.com/#alt-downloads
* Install VSCode Remote Development Extension Pack: https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack

## Install docker

* Install Docker and WSL plugins: https://code.visualstudio.com/blogs/2020/03/02/docker-in-wsl2
* On linux shell add user to "docker" group:
```
usermod -a -G docker <USERNAME>
```

## Java development

* Install JDK on linux:
```
sudo apt install default-jdk
```
* Set JAVA_HOME environment variable:
```
echo JAVA_HOME=/usr/lib/jvm/java-1.11.0-openjdk-amd64 >> /home/<USER>/.profile
```

### Use VSCode as IDE
* Install VSCode Java Extension pack: https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack
* Install Spring Boot Extention Pack: https://marketplace.visualstudio.com/items?itemName=Pivotal.vscode-boot-dev-pack

### Use IntelliJ as IDE
* Install Intellij: https://www.jetbrains.com/idea/download/#section=windows


## NodeJS development

* Install nvm:
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```
* Install nodejs LTS version: 
```
nvm install --lts
```
* Install VSCode NodeJs extension pack: https://marketplace.visualstudio.com/items?itemName=waderyan.nodejs-extension-pack
* Create an express project:
```
npx express-generator nodejs-express-example --view=pug
```
* Start express project
```
npx cross-env DEBUG=nodejs-express-example:* npm start
```







