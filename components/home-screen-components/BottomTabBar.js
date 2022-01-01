import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { headerStyles } from '../../styles/home-screen-styles/HomeScreenStyles';

export default function BottomTabBar() {
    const TabImgsEnum = {
        HOME: 1,
        SEARCH: 2,
        REELS: 3,
        SHOPPING: 4,
        PROFILE: 5,
        properties: {
            1: {
                active: require("../../assets/icons/bottom-tab/home-active.png"),
                inactive: require("../../assets/icons/bottom-tab/home-inactive.png")
            },
            2: {
                active: require("../../assets/icons/bottom-tab/search-active.png"),
                inactive: require("../../assets/icons/bottom-tab/search-inactive.png")
            },
            3: {
                active: require("../../assets/icons/bottom-tab/reel-active.png"),
                inactive: require("../../assets/icons/bottom-tab/reel-inactive.png")
            },
            4: {
                active: require("../../assets/icons/bottom-tab/shop-active.png"),
                inactive: require("../../assets/icons/bottom-tab/shop-inactive.png")
            },
            5: {
                active: require("../../assets/icons/bottom-tab/profile-active.jpeg"),
                inactive: require("../../assets/icons/bottom-tab/profile-inactive.jpeg")
            }
        }
    }
    return (
        <View style={headerStyles.bottomTabContainer}>
            {/* Option 1 */}
            <TouchableOpacity>
                <Image source={require("../../assets/icons/bottom-tab/home-active.png")}
                style={headerStyles.bottomTabImage}
                />
            </TouchableOpacity>
            {/* Option 2 */}
            <TouchableOpacity>
                <Image source={require("../../assets/icons/bottom-tab/search-inactive.png")}
                    style={headerStyles.bottomTabImage}
                />
            </TouchableOpacity>
            {/* Option 3 */}
            <TouchableOpacity>
                <Image source={require("../../assets/icons/bottom-tab/reel-inactive.png")}
                    style={headerStyles.bottomTabImage}
                />
            </TouchableOpacity>
            {/* Option 4 */}
            <TouchableOpacity>
                <Image source={require("../../assets/icons/bottom-tab/shop-inactive.png")}
                    style={headerStyles.bottomTabImage}
                />
            </TouchableOpacity>
            {/* Option 5 */}
            <TouchableOpacity>
                <Image source={require("../../assets/icons/bottom-tab/profile-inactive.jpeg")}
                    style={headerStyles.bottomTabImage}
                />
            </TouchableOpacity>
        </View>
    )
}