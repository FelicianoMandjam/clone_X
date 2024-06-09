import {User} from '../models/index.js'

const users = [
    {
            id : 0,
            username: 'john_doe123',
            lastName: 'Doe',
            firstName: 'John',
            email: 'john.doe@example.com',
            password: 'securePassword1!',
            profilePicture: 'john_profile.jpg',
            bannerPicture: 'john_banner.jpg',
            bio: 'Loves hiking and outdoor adventures.',
            allowMessages: true,
            verifiedAt: new Date('2023-01-15T10:00:00Z'),
            // createdAt: new Date('2023-01-01T10:00:00Z'),
            // updatedAt: new Date('2023-01-01T10:00:00Z')
        },
        {
            id : 1,
            username: 'jane_smith456',
            lastName: 'Smith',
            firstName: 'Jane',
            email: 'jane.smith@example.com',
            password: 'securePassword2!',
            profilePicture: 'jane_profile.jpg',
            bannerPicture: 'jane_banner.jpg',
            bio: 'Aspiring artist and coffee lover.',
            allowMessages: false,
            verifiedAt: new Date('2023-05-20T14:30:00Z'),
            // createdAt: new Date('2023-01-01T10:00:00Z'),
            // updatedAt: new Date('2023-01-01T10:00:00Z')
        },
        {
            id : 2,
            username: 'samuel_lee789',
            lastName: 'Lee',
            firstName: 'Samuel',
            email: 'samuel.lee@example.com',
            password: 'securePassword3!',
            profilePicture: 'samuel_profile.jpg',
            bannerPicture: 'samuel_banner.jpg',
            bio: 'Tech enthusiast and blogger.',
            allowMessages: true,
            verifiedAt: null,
            // createdAt: new Date('2023-01-01T10:00:00Z'),
            // updatedAt: new Date('2023-01-01T10:00:00Z')
        }
    ];
    
    // A Revoir
    export const get =  (req, res ) => {
        try{
          // const response = await users.post();
            const response = users;
            res.status(200).json(response)
        }catch(e){
          console.log(e.message);
        }
      }
    
      export const post = async (req, res) => {
        try{
          const User = await User.create(req.body)
          res.status(201).json(User)
        }catch(e){
          console.log(e.message);
        }
      }
      
      export const put = async (req, res) => {
        try{
        }catch(e){
          console.log(e.message);
        }
      }
      
      export const _delete = async (req, res) => {
        try{
        }catch(e){
          console.log(e.message);
        }
      }