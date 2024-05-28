import { TracksList } from '@/components/TracksList'
import { defaultStyles } from '@/styles'
import { View, Text, ScrollView } from 'react-native'
import library from '@/assets/data/library.json'
import { screenPadding } from '@/constants/tokens'
import { useMemo } from 'react'
import { useNavigationSearch } from '@/hooks/useNavigationSearch'
import { useFavorites } from '@/store/library'
import { trackTitleFilter } from '@/helpers/filter'
import { generateTracksListId } from '@/helpers/miscellaneous'

const FavouritesScreen = () => {
	const search = useNavigationSearch({
		searchBarOptions: {
			placeholder: 'Search favourites',
		},
	})

	const favouritesTracks = useFavorites().favorites

	const filteredFavouritesTracks = useMemo(() => {
		if (!search) return favouritesTracks

		return favouritesTracks.filter(trackTitleFilter(search))
	}, [search])

	return (
		<View style={defaultStyles.container}>
			<ScrollView
				style={{ paddingHorizontal: screenPadding.horizontal }}
				contentInsetAdjustmentBehavior="automatic"
			>
				<TracksList
					id={generateTracksListId('favourites', search)}
					scrollEnabled={false}
					tracks={filteredFavouritesTracks}
					hideQueueControls
				/>
			</ScrollView>
		</View>
	)
}

export default FavouritesScreen
