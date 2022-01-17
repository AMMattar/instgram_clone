import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { Divider } from 'react-native-elements'

export const bottomTabsIcons = [
    {
        name: 'Home',
        active: "https://img.icons8.com/ios-filled/2x/ffffff/home.png",
        inactive: "https://img.icons8.com/ios/2x/ffffff/home.png",
    },
    {
        name: 'Search',
        active: "https://img.icons8.com/external-kiranshastry-solid-kiranshastry/2x/ffffff/external-search-interface-kiranshastry-solid-kiranshastry.png",
        inactive: "https://img.icons8.com/ios-filled/2x/ffffff/search.png",
    },
    {
        name: 'Reels',
        active: "https://img.icons8.com/ios-glyphs/2x/ffffff/movie--v1.png",
        inactive: "https://img.icons8.com/ios-glyphs/2x/ffffff/clips-apperance.png",
    },
    {
        name: 'Shop',
        active: "https://img.icons8.com/ios-filled/2x/ffffff/shop.png",
        inactive: "https://img.icons8.com/ios/2x/ffffff/shop.png",
    },
    {
        name: 'Profile',
        active: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE9tG_NFfmLde3aA3q3p2yib1KJslRRNlJQg&usqp=CAU",
        inactive: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE9tG_NFfmLde3aA3q3p2yib1KJslRRNlJQg&usqp=CAU",
    },
]

const BottomTabs = ({ icons }) => {
    const [activeTab, setActiveTab] = useState('Home')

    const Icon = ({ icon }) => (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
            <Image source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }} style={styles.icon} />
        </TouchableOpacity>
    )

    return (
        <View style={styles.wrapper}>
            <Divider width={1} orientation='vertical' />
            <View style={styles.container}>
                {icons.map((icon, index) => (
                    <Icon key={index} icon={icon} />
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        width: '100%',
        bottom: '0%',
        backgroundColor: '#000',
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        paddingTop: 10,
    },
    icon: {
        width: 30,
        height: 30,
    }
})

export default BottomTabs
