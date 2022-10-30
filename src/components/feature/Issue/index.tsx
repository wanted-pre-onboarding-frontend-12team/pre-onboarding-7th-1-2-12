import React from 'react';

import Title from '../../../shared/Title';
import { IssueWriter, IssueComment, IssueTime, IssueNumber } from '../../';
import { IssueLayout, BorderLine } from './styled';

export default function Issue({ issueItem, userItem }: any) {
	const { comments, number, title, created_at, updated_at } = issueItem;
	const { login, html_url, avatar_url } = userItem;

	return (
		<IssueLayout>
			<div className="title">
				<Title>
					{title}
					<IssueNumber issueNumber={number} />
				</Title>
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
