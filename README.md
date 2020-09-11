# front-end

启动服务器 F:\project\RMS\front-end\service>node app.js

启动前端服务 F:\project\RMS\front-end>npm run serve

### 安装

##### 1.部署本地服务器(后端) 

- 找到根目录下的 service\dbmydb.sql文件。
- 把mydb.sql导入本地的数据库。MySQL 或者其他数据库工具都可。
- 另外创建一个文件夹（后端使用）把package.json文件放到这个文件夹下，cmd运行`npm i`。下载完成后，再cmd运行 `node app` 。ok此时本地服务器已经部署完成。

##### 2.前端

- 打开front-end文件夹，cmd运行 `npm i`下载依赖的包
- cmd运行`npm run serve`
- 打开浏览器访问`http://localhost:8080/#/`