import { useAuth } from "@/context/AuthContext";
import { useSnackbar } from "@/context/SnackbarContext";
import { UserResponse } from "@/types/UserResponse";
import { db } from "@/utils/database";
import {
  Button,
  Cell,
  EmptyStatePlaceholder,
  Row,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Typo,
} from "@solved-ac/ui-react";
import { IconTrash } from "@tabler/icons-react";
import { FirebaseError } from "firebase/app";
import { ref, remove } from "firebase/database";
import { ProfileImage, UserRow } from "./components";

interface Props {
  adminUIDs: string[];
  users: Map<string, UserResponse>;
}

const AdminList = ({ adminUIDs, users }: Props) => {
  const auth = useAuth();
  const snackbar = useSnackbar();

  const handleRemoveAdmin = async (uid: string) => {
    try {
      await remove(ref(db, "admin_emails/" + uid));
      snackbar.enqueue({
        message: "관리자를 삭제했습니다.",
        severity: "success",
      });
    } catch (error) {
      console.error(error);
      if (error instanceof FirebaseError) {
        snackbar.enqueue({
          message: `관리자 삭제에 실패했습니다: ${error.message}`,
          severity: "error",
        });
      } else {
        snackbar.enqueue({
          message: `관리자 삭제에 실패했습니다.`,
          severity: "error",
        });
      }
    }
  };

  if (
    ["me@shiftpsh.com", "me@havana.moe"].every((x) => x !== auth.user?.email)
  ) {
    return (
      <EmptyStatePlaceholder>관리자 수정 권한이 없습니다.</EmptyStatePlaceholder>
    );
  }


  if (!adminUIDs.length) {
    return <EmptyStatePlaceholder>관리자가 없습니다.</EmptyStatePlaceholder>;
  }

  return (
    <TableContainer>
      <Table fullWidth>
        <TableHead>
          <Row>
            <Cell width="60%">이름</Cell>
            <Cell width="20%">UID</Cell>
            <Cell width="20%">삭제</Cell>
          </Row>
        </TableHead>
        <TableBody>
          {adminUIDs.map((uid) => {
            const user = users.get(uid);
            return (
              <Row key={uid}>
                {!user ? (
                  <Cell colSpan={2}>
                    <Typo description>{uid}</Typo>
                  </Cell>
                ) : (
                  <>
                    <Cell
                      style={{
                        verticalAlign: "middle",
                      }}
                    >
                      <UserRow>
                        <ProfileImage
                          src={user.photoURL}
                          alt={user.name + "의 프로필 사진"}
                        />
                        <div>
                          {user.name}
                          {auth?.user?.uid === uid && (
                            <>
                              {" "}
                              <Typo description>(나)</Typo>
                            </>
                          )}
                          <br />
                          <Typo description small>
                            {user.email}
                          </Typo>
                        </div>
                      </UserRow>
                    </Cell>
                    <Cell
                      style={{
                        verticalAlign: "middle",
                      }}
                    >
                      <Typo small>{uid}</Typo>
                    </Cell>
                  </>
                )}
                <Cell>
                  {auth?.user?.uid !== uid && (
                    <Button
                      fullWidth
                      transparent
                      onClick={() => handleRemoveAdmin(uid)}
                    >
                      <IconTrash />
                    </Button>
                  )}
                </Cell>
              </Row>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AdminList;
