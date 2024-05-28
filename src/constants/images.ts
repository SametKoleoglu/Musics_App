// import { colors, fontSize } from '@/constants/tokens'
// import { StyleSheet } from 'react-native'

// export const defaultStyles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: colors.background,
// 	},
// 	text: {
// 		fontSize: fontSize.base,
// 		color: colors.text,
// 	},
// })

// export const utilsStyles = StyleSheet.create({
// 	centeredRow: {
// 		flexDirection: 'row',
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 	},
// 	slider: {
// 		height: 7,
// 		borderRadius: 16,
// 	},
// 	itemSeparator: {
// 		borderColor: colors.textMuted,
// 		borderWidth: StyleSheet.hairlineWidth,
// 		opacity: 0.3,
// 	},
// 	emptyContentText: {
// 		...defaultStyles.text,
// 		color: colors.textMuted,
// 		textAlign: 'center',
// 		marginTop: 20,
// 	},
// 	emptyContentImage: {
// 		width: 200,
// 		height: 200,
// 		alignSelf: 'center',
// 		marginTop: 40,
// 		opacity: 0.3,
// 	},
// })

import unknownArtistImage from '@/assets/unknown_artist.png'
import unknownTrackImage from '@/assets/unknown_track.png'
import { Image } from 'react-native'

export const unknownTrackImageUri = Image.resolveAssetSource(unknownTrackImage).uri
export const unknownArtistImageUri = Image.resolveAssetSource(unknownArtistImage).uri
