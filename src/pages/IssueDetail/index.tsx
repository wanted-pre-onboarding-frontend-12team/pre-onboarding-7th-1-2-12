import { MarkdownRenderer } from '../../components';
import { useEffect, useState } from 'react';
import { Params, useParams } from 'react-router-dom';
import IssueHeader, { IssueItem } from '../../components/feature/IssueHeader';
import { DetailLayout } from './styled';
import { getDetailIssues } from '../../apis/Issue';
import { AxiosResponse } from 'axios';

export default function IssueDetail() {
	const { issueNumber } = useParams<Params>();
	const [issueData, setIssueData] = useState<IssueItem>();

	console.log(issueData);

	const getDetail = async (issueNumber: string) => {
		let res: AxiosResponse;
		try {
			res = await getDetailIssues(issueNumber);
			setIssueData(res.data);
		} catch (err) {
			alert(err);
		}
	};

	useEffect(() => {
		if (issueNumber) {
			getDetail(issueNumber);
		}
	}, []);

	return (
		<DetailLayout>
			{issueData && (
				<div>
					<IssueHeader
						number={issueData.number}
						title={issueData.title}
						created_at={issueData.created_at}
						login={issueData.user.login}
						avatar_url={issueData.user.avatar_url}
						comments={issueData.comments}
						body={issueData.body}
					/>
					<MarkdownRenderer markdown={issueData.body} />
				</div>
			)}
		</DetailLayout>
	);
}
