import React from 'react';

import CommonTitle from '../../../shared/Title';
import { IssueWriter, IssueNumber, IssueTime, IssueComment } from '../../';
import { IssueLayout, BorderLine } from './styled';
import { useNavigate } from 'react-router-dom';

export default function Issue({ issueItem, userItem }: any) {
	const navigate = useNavigate();
	const style = {};
	const { comments, number, title, created_at, updated_at } = issueItem;
	const { login, html_url, avatar_url } = userItem;

	return (
		<IssueLayout>
			<div
				className="title"
				onClick={() => {
					navigate(`/detail/${number}`);
				}}
			>
				<CommonTitle>
					{title}
					<IssueNumber issueNumber={number} />
				</CommonTitle>
			</div>
			<IssueWriter writerName={login} />
			<div className="IssueInfo">
				<IssueTime writeTime={created_at} />
				<IssueComment commentCount={comments} />
			</div>
			<BorderLine />
		</IssueLayout>
	);
}
