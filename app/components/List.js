import React from "react";
import { ListItem, Avatar } from "react-native-elements";
import { View } from "react-native";

const list = [
  {
    name: "저 이제 군필이에요",
    avatar_url:
      "https://pumasi-image.s3.ap-northeast-2.amazonaws.com/1617424697837.jpg",
    subtitle: "연락주세요",
  },
  {
    name: "눈 아파...",
    avatar_url:
      "http://k.kakaocdn.net/dn/bxW7tw/btqZJ5U3epi/O4KpUCQbckT119LabcYlOk/img_110x110.jpg",
    subtitle: "컨셉인듯 하지만 사실 진짜 눈이 아팟다...",
  },
  {
    name: "팔로우 늘려주세요",
    avatar_url:
      "http://k.kakaocdn.net/dn/T7z5o/btqZ5Hfk8KE/bWRPjkNDjI6RcHOJCowrg0/img_110x110.jpg",
    subtitle: "팔로우 늘려주세요",
  },
  {
    name: "작년 서울숲",
    avatar_url:
      "http://k.kakaocdn.net/dn/T7z5o/btqZ5Hfk8KE/bWRPjkNDjI6RcHOJCowrg0/img_110x110.jpg",
    subtitle: "전 여자친구가 찍어준 사진인데 너무 잘 찍어줘서 못 지우고있다",
  },
  {
    name: "이거 좀 보세요오오",
    avatar_url:
      "https://pumasi-image.s3.ap-northeast-2.amazonaws.com/1617424911188.jpg",
    subtitle: "하유 라익 뎃~",
  },
  {
    name: "여신의 명령",
    avatar_url: "http://gravatar.com/avatar/1617423543?d=identicon",
    subtitle: "7년 만에 입어본 후드집업",
  },
  {
    name: "뚜뚜루루루",
    avatar_url:
      "https://pumasi-image.s3.ap-northeast-2.amazonaws.com/1617424911188.jpg",
    subtitle: "뚜기",
  },
];

const List = () => {
  return (
    <View>
      {list.map((l, i) => (
        <ListItem key={i} bottomDivider>
          <Avatar rounded source={{ uri: l.avatar_url }} />
          <ListItem.Content>
            <ListItem.Title numberOfLines={1}>{l.name}</ListItem.Title>
            <ListItem.Subtitle numberOfLines={1}>
              {l.subtitle}
            </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      ))}
    </View>
  );
};

export default List;
