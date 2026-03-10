// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DeleteOutlinedSvg from '@colelab/icons-svg/es/asn/DeleteOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DeleteOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DeleteOutlinedSvg }, slots);
  },
});
