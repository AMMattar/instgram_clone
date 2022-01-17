import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Divider } from 'react-native-elements'

const PostFooterIcons = [
    {
        name: 'Like',
        imageUrl: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png',
        likedImageUrl: 'https://www.pinclipart.com/picdir/middle/87-877828_save-the-heart-by-ofirma85-instagram-like-icon.png',
    },
    {
        name: 'Comment',
        imageUrl: 'https://cdn141.picsart.com/328471446044211.png?to=crop&type=webp&r=310x310&q=50',
    },
    {
        name: 'Share',
        imageUrl: 'https://cdn131.picsart.com/328472298029211.png?type=webp&amp;to=min&amp;r=640',
    },
    {
        name: 'Save',
        imageUrl: 'https://cdn141.picsart.com/328472001021211.png?type=webp&amp;to=min&amp;r=640',
    },
]

const Post = ({ post }) => {
    return (
        <View style={{ marginBottom: 30 }}>
            <Divider width={1} orientation='vertical' />
            <PostHeader post={post} />
            <PostImage post={post} />
            <View style={{ marginHorizontal: 15, marginTop: 10 }}>
                <PostFooter />
                <Likes post={post} />
                <Caption post={post} />
                <CommentSection post={post} />
                <Comments post={post} />
            </View>
        </View>
    )
}

const PostHeader = ({ post }) => (
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
        alignItems: 'center'
    }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={{ uri: post.profile_pic }} style={styles.story} />
            <Text style={{ color: 'white', marginLeft: 5, fontWeight: '600' }}>
                {post.user}
            </Text>
        </View>
        <Text style={{ color: 'white', fontWeight: '900' }}>...</Text>
    </View>
)

const PostImage = ({ post }) => (
    <View style={{ width: '100%', height: 450, }}>
        <Image source={{ uri: post.imageUrl }} style={{ height: '100%', resizeMod: 'cover' }} />
    </View>
)

const PostFooter = () => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={styles.leftFooterIconContainer}>
            <Icon imgStyle={styles.footerIcon} imgUrl={PostFooterIcons[0].imageUrl} />
            <Icon imgStyle={styles.footerIcon} imgUrl={PostFooterIcons[1].imageUrl} />
            <Icon imgStyle={styles.footerIcon} imgUrl={PostFooterIcons[2].imageUrl} />
        </View>
        <View>
            <Icon imgStyle={styles.footerIcon} imgUrl={PostFooterIcons[3].imageUrl} />
        </View>
    </View>
)

const Icon = ({ imgStyle, imgUrl }) => (
    <TouchableOpacity>
        <Image style={imgStyle} source={{ uri: imgUrl }} />
    </TouchableOpacity>
)

const Likes = ({ post }) => (
    <View style={{ flexDirection: 'row', marginTop: 4 }}>
        <Text style={{ color: 'white', fontWeight: '600' }} >{post.likes.toLocaleString('en')} likes</Text>
    </View>
)

const Caption = ({ post }) => (
    <View style={{ marginTop: 5 }}>
        {!!post.comments.length && (
            <View style={{ marginTop: 5 }}>
                <Text style={{ color: 'white' }}>
                    <Text style={{ fontWeight: '600' }}>{post.user}</Text>
                    <Text> {post.caption}</Text>
                </Text>
            </View>
        )}
    </View>
)

const CommentSection = ({ post }) => (
    <Text style={{ color: 'gray' }}>
        View {post.comments.length > 1 ? 'all' : ''} {post.comments.length} {' '}
        {post.comments.length > 1 ? 'comments' : 'comment'}
    </Text>
)

const Comments = ({ post }) => (
    <>
        {post.comments.map((comment, index) => (
            <View key={index} style={{ flexDirection: 'row', marginTop: 5 }}>
                <Text style={{ color: 'white' }}>
                    <Text style={{ fontWeight: '600' }}>{comment.user}</Text>
                    {' '}
                    {comment.comment}
                </Text>
            </View>
        ))}
    </>
)

const styles = StyleSheet.create({
    story: {
        width: 35,
        height: 35,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 1.6,
        borderColor: '#ff8501',
    },
    footerIcon: {
        width: 33,
        height: 33,
    },
    leftFooterIconContainer: {
        flexDirection: 'row',
        width: '32%',
        justifyContent: 'space-between',
    }
})

export default Post
