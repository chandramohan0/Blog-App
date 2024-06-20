import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

const storage = new GridFsStorage({
    url: `mongodb://thechandramohan0:Chandra123@blog-app.pg3qzxg.mongodb.net/blogapp?retryWrites=true&w=majority&appName=Blog-App`,
    options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.memeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({storage}); 