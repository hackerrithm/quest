import { actionTypes } from '../../../common/constants/actionTypes';
import { memberAPI } from '../../../api/member';
import { MemberEntity } from '../../../model/memberEntity';

export const fetchMembersAction = () => (dispatch) => {
  memberAPI.fetchMembers()
    .then((members) => {
      dispatch(fetchMembersCompleted(members));
    });
};

const fetchMembersCompleted = (members: MemberEntity[]) => ({
  type: actionTypes.FETCH_MEMBERS_COMPLETED,
  payload: members,
});
