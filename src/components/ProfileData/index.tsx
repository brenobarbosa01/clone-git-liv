import React from 'react';

import {
    Container,
    Flex,
    Avatar,
    Row,
    PeopleIcon,
    Column,
    CompanyIcon,
    LocationIcon,
    EmailIcon,
    BlogIcon
} from './styles';

interface Props {
    user: any;
}

const ProfileData: React.FC<Props> = ({
    user,


}) => {

    return (
        <Container>
            <Flex>
                <Avatar src={user.avatar_url} alt={user.login} />
                <div>
                    <h1>{user.name}</h1>
                    <h2>{user.login}</h2>
                </div>
            </Flex>
            <Row>
                <li>
                    <b>{user.followers}</b>
                    <span>followers</span>

                </li>
                <li>
                    <b>{user.following}</b>
                    <span>following</span>
                </li>
                <li>
                    <b>6</b>
                    <span>stars</span>
                </li>

            </Row>
            <div className='buttonfollow'>
                <button>Following</button>
                </div>
            <Column>
                {user.company && (
                    <li>

                        <span>{user.company}</span>
                    </li>

                )}
                {user.location && (
                    <li>
                        <LocationIcon />
                        <span>{user.location}</span>
                    </li>

                )}
                {user.email && (
                    <li>
                        <EmailIcon />
                        <span>{user.email}</span>
                    </li>

                )}
                {user.blog && (
                    <li>
                        <BlogIcon />
                        <span>{user.blog}</span>
                    </li>

                )}
                {user.bio && (
                    <li>
                        <span className='abençoadeus'>{user.bio}</span>
                    </li>

                )}



            </Column>
    
        </Container>
    );
}

export default ProfileData;