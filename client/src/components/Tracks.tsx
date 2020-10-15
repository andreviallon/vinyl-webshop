import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Track } from '../models/AlbumModel';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		smallColumn: {
			width: theme.spacing(1),
		}
	})
);

interface Props {
	tracks: Track[] | undefined
}

const Tracks: React.FC<Props> = ({ tracks }) => {
	const classes = useStyles();

	return (
		<TableContainer component={Paper}>
			<Table>
			<TableHead>
				<TableRow>
				<TableCell>#</TableCell>
				<TableCell>Track</TableCell>
				<TableCell>Length</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{tracks?.map((track, index) => (
					<TableRow key={index}>
						<TableCell className={classes.smallColumn}>{track.trackNumber}</TableCell>
						<TableCell align="left">{track.name}</TableCell>
						<TableCell>{track.length}</TableCell>
					</TableRow>
				))}
			</TableBody>
			</Table>
		</TableContainer>
	);
}

export default Tracks;
