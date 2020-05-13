import React from "react";

import {
	Input,
	Image,
	Grid,
	Button,
	Item,
	Label,
	List,
} from "semantic-ui-react";

const User = ({ data }) => {
	return (
		<div style={{ marginTop: 20 }}>
			{data && (
				<Grid>
					<Grid.Row>
						<Item.Group divided>
							<Item>
								<Item.Image src={data.avatar_url} />

								<Item.Content>
									<Item.Header as="a">
										{data.name}
									</Item.Header>
									<Item.Meta>
										<span className="cinema">
											{data.bio}
										</span>
									</Item.Meta>
									<Item.Description>
										<List>
											<List.Item>
												<List.Icon name="users" />
												<List.Content>
													{data.name}
												</List.Content>
											</List.Item>
											<List.Item>
												<List.Icon name="marker" />
												<List.Content>
													{data.location}
												</List.Content>
											</List.Item>
											<List.Item>
												<List.Icon name="clock" />
												<List.Content>
													{new Date(
														data.created_at
													).toLocaleString()}
												</List.Content>
											</List.Item>
											
										</List>
									</Item.Description>
									<Item.Extra>
										<Button basic color="red">
											followings ({data.following})
										</Button>
										<Button basic color="orange">
											followers ({data.followers})
										</Button>
									</Item.Extra>

								</Item.Content>
							</Item>
						</Item.Group>
					</Grid.Row>
				</Grid>
			)}
		</div>
	);
};

export default User;
