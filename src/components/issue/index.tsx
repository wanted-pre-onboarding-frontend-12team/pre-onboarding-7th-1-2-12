import React, { useContext } from 'react';

import CommonTitle from '../../shared/Title';
import IssueComment from '../feature/IssueComment';
import IssueNum from '../feature/IssueNum';
import IssueTime from '../feature/IssueTime';
import IssueWriter from '../feature/IssueWriter';
import { IssueLayout, BorderLine } from './styled';

export default function Issue({ issueItem, userItem }: any) {
	const style = {};
	const { comments, number, title, created_at, updated_at } = issueItem;
	const { login, html_url, avatar_url } = userItem;

	return (
		<IssueLayout>
			<div className="title">
				<CommonTitle style={style}>{title}</CommonTitle>
				<IssueNum issueNumber={number} />
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
