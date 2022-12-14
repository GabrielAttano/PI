from pydantic import BaseModel


class RecoverySchema(BaseModel):
    user_id: str
    new_password: str

class ForgotPasswordSchema(BaseModel):
    email: str
